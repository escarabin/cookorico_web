"use strict";
/**
 * Imports
 */
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engines = require('consolidate');
/* var profile_routes_1 = require('./app/profile/profile.routes');
 var job_search_routes_1 = require('./app/job-search/job-search.routes'); /*
 /**
 * Init our app
 */
var app = express();
// view engine setup
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('prerender-node').set('prerenderToken', 'kJoZP8ueWg7jkPBp3rRO'));
/**
 * Basic routes
 */
app.use('/', express.static(path.join(__dirname, '.')));

/**
 * TODO: MOVE ROUTES TO SEPARATE FILE
 */
var appRoutes = [
    // Child routing
    {
        path: 'profil',
        loadChildren: 'app/profile/profile.module#ProfileModule',
        data: {
            meta: {
                title: 'Profil'
            }
        }
    },

    {
        path: 'recherche',
        loadChildren: 'app/job-search/job-search.module#JobSearchModule',
        data: {
            meta: {
                title: 'Recherche d\'emploi'
            }
        }
    },

    // Business page
    { path: 'etablissement/:businessId'},
    { path: 'club/:clubId'},


    { path: 'definir-nouveau-mot-de-passe/:userId'},

    // CGU
    { path: 'conditions-utilisations'},

    // CGV
    { path: 'conditions-vente'},

    // Qui sommes-nous
    { path: 'qui-sommes-nous'},

    // User
    { path: 'inscription-candidat'},

    // Promo
    { path: 'accueil-recruteur'},
    { path: 'accueil-candidat'},

    { path: 'accueil'},

    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

var profileRoutes = [
    {path: 'apercu'},
    {path: 'apercu/:userId'},
    {path: 'apercu/:userId/complet'},
    {path: 'confirmation-du-compte/:userTypeId'},

    // Experiences
    {path: 'experience/editer/:experienceId'},
    {path: 'experience/creer'},
    {path: 'experiences'},
    {path: 'experience'},

    // Applications
    {path: 'candidatures'},

    // Education
    {path: 'formation/editer/:studyId'},
    {path: 'formation/creer'},
    {path: 'formations'},
    {path: 'formation'},

    // Testimonials
    {path: 'recommandation/creer/:testimonialId'},
    {path: 'recommandation/:testimonialId'},
    {path: 'recommandation'},
    {path: 'recommandations'},

    // Testimonials asked
    {path: 'demande_de_recommandation/:testimonialId'},
    {path: 'demande_de_recommandation'},
    {path: 'demandes_de_recommandation'},

    // Businesses
    {path: 'etablissement/contacts/:businessId'},
    {path: 'etablissement/editer/:businessId'},
    {path: 'etablissement/creer'},
    {path: 'etablissement'},
    {path: 'etablissements'},

    // Job posts
    {path: 'annonce/editer/:jobPostId'},
    {path: 'annonce/creer/:businessId'},
    {path: 'annonce/creer'},
    {path: 'annonces_admin'},
    {path: 'annonce'},
    {path: 'annonces'},

    // Applicants
    {path: 'postulants'},
    {path: 'postulant'},
    {path: 'postulants/:jobPostId'},
    {path: 'postulant/apercu-profil'},

    // Matching profiles
    {path: 'profils-correspondants'},
    {path: 'profils-correspondants/:jobPostId'},

    // Mails
    {path: 'mail-template/edit/:templateId'},
    {path: 'mail-template/create'},
    {path: 'mail-templates'},
    {path: 'mail-template'},

    // Candidate dashboard
    {path: 'espace-candidat'},

    // Clubs management
    {path: 'clubs'},
    {path: 'clubs/:type'},

    // Pricing plans
    {path: 'mon_abonnement'},

    // Website editor
    {path: 'website-editor'},

    // Payment
    {path: 'confirmation-paiement/:success'},

    // Admin
    {path: 'recruteurs-admin'},
    {path: 'packs'}
];

var jobSearchRoutes = [
    { path: 'tous-les-emplois'},
    { path: ':placeId/:jobNamingId/:contractTypeId/:studyLevelId'},
    { path: 'candidater/:jobId'},
    { path: 'annonce/:jobId'}];

/**
 * Loop though Angular routes & transform them to Express routes
 */
for (var i = 0; i < appRoutes.length; i++) {
    var route = appRoutes[i];
    app.use('/' + route['path'], express.static(path.join(__dirname, '.')));
}
for (var i = 0; i < profileRoutes.length; i++) {
    var route = profileRoutes[i];
    app.use('/profil/' + route['path'], express.static(path.join(__dirname, '.')));
}
for (var i = 0; i < jobSearchRoutes.length; i++) {
    var route = jobSearchRoutes[i];
    app.use('/recherche/' + route['path'], express.static(path.join(__dirname, '.')));
}

/**
 * Redirect all unknow routes to index.html
 */
app.all('*', function (req, res) {
    res.redirect('/index.html');
});
module.exports = app;
