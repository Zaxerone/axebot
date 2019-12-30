'use strict';

const { green, blue } = require('chalk');
const express = require('express');
const dashboard = express();
const path = require('path');
const passport = require('passport');
const Strategy = require('passport-discord').Strategy;
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

const {
	botID,
	oauthSecret,
	port,
	sSecret,
	callbackURL
} = require('../../config.js');

module.exports = async client => {

	client.user.setPresence({ activity: { name: 'axebot.fr' }, status: 'dnd' });
	client.appInfo = await client.fetchApplication();
	setTimeout(() => {
			client.appInfo = client.fetchApplication();
	}, 3600000);
		console.log(green("I'm ready!"));
		// root/dashboard/
		const dashboardDirectory = path.resolve(
			`${process.cwd()}${path.sep}dashboard`
		);
		// root/dashboard/templates
		const templatesDirectory = path.resolve(
			`${dashboardDirectory}${path.sep}templates`
		);
		// root/dashboard/public
		dashboard.use(
			'/public',
			express.static(path.resolve(`${dashboardDirectory}${path.sep}public`))
		);

		passport.serializeUser((user, done) => {
			done(null, user);
		});

		passport.deserializeUser((obj, done) => {
			done(null, obj);
		});

		passport.use(
			new Strategy(
				{
					clientID: botID,
					clientSecret: oauthSecret,
					callbackURL: callbackURL,
					scope: ['identify', 'guilds']
				},
				(accessToken, refreshToken, profile, done) => {
					process.nextTick(() => done(null, profile));
				}
			)
		);

		dashboard.use(
			session({
				store: new MemoryStore({ checkPeriod: 99999999 }),
				secret: sSecret,
				resave: false,
				saveUninitialized: false
			})
		);

		dashboard.use(passport.initialize());
		dashboard.use(passport.session());

		dashboard.engine('html', require('ejs').renderFile);
		dashboard.set('view engine', 'html');

		const renderTemplate = (res, req, template, data = {}) => {
			const baseData = {
				bot: client,
				path: req.path,
				user: req.isAuthenticated() ? req.user : null
			};
			res.render(
				path.resolve(`${templatesDirectory}${path.sep}${template}`),
				Object.assign(baseData, data)
			);
		};

		dashboard.get(
			'/login',
			(req, res, next) => {
				req.session.backURL = '/';
				next();
			},
			passport.authenticate('discord')
		);

		dashboard.get('/callback', passport.authenticate('discord'), (req, res) => {
			res.redirect('/');
		});

		dashboard.get('/logout', (req, res) => {
			req.session.destroy(() => {
				req.logout();
				res.redirect('/');
			});
		});

		dashboard.get('/', (req, res) => {
			renderTemplate(res, req, 'home.ejs');
		});

		dashboard.listen(port);
		console.log(blue('Dashboard is ready!'));
}
