import mongoose from 'mongoose'

import {connectDB} from './config/database.js'

import Services from './models/Services.js'

const subServices = [

    {service: 'Netflix', search: ['netflix'], logo: '/images/netflixLogo.svg'},
    {service: 'Hulu', search: ['hulu'], logo: '/images/huluLogo.svg'},
    {service: 'HBO Max', search: ['hbo', 'hbo max', 'max'], logo: '/images/hboLogo.svg'},
    {service: 'Disney+', search: ['disney', 'disney+', 'disney plus'], logo: '/images/DisneyLogo.svg'},
    {service: 'Paramount+', search: ['paramount', 'paramount+', 'paramount plus'], logo: '/images/paramountplusLogo.svg'},
    {service: 'Peacock', search: ['peacock'], logo: '/images/peacockLogo.svg'},
    {service: 'Apple TV', search: ['apple tv', 'appletv'], logo: '/images/appletvLogo.svg'},
    {service: 'Amazon Prime', search: ['amazon', 'amazon prime'], logo: '/images/amazonLogo.svg'},
    {service: 'Audible', search: ['audible'], logo: '/images/audibleLogo.svg'},
    {service: 'Twitch', search: ['twitch', 'twitch prime'], logo: '/images/twitchLogo.svg'},
    {service: 'YouTube', search: ['youtube', 'youtube tv', 'youtube premium'], logo: '/images/youtubeLogo.svg'},
    {service: 'ESPN+', search: ['espn', 'espn+', 'espn plus'], logo: '/images/espnLogo.svg'},
    {service: 'Crunchyroll', search: ['crunchyroll'], logo: '/images/crunchyrollLogo.svg'},
    {service: 'Apple Music', search: ['apple music'], logo: '/images/applemusicLogo.svg'},
    {service: 'Spotify', search: ['spotify'], logo: '/images/spotifyLogo.svg'},
    {service: 'Xbox', search: ['xbox', 'xbox game pass', 'game pass'], logo: '/images/xboxLogo.svg'},
    {service: 'PlayStation', search: ['playstation', 'ps plus', 'playstation plus'], logo: '/images/playstationLogo.svg'},
    {service: 'Nintendo', search: ['nintendo'], logo: '/images/nintendoLogo.svg'},
    {service: 'Costco', search: ['costco'], logo: '/images/costcoLogo.svg'},
    {service: 'Uber One', search: ['uber', 'uber one'], logo: '/images/uberLogo.svg'},
    {service: 'DoorDash', search: ['doordash', 'dashpass'], logo: '/images/doordashLogo.svg'},
    {service: 'Gym', search: ['gym', 'fitness', 'la fitness', 'ymca', 'equinox', 'lifetime', 'planet fitness', 'crunch fitness'], logo: '/images/gymLogo.svg'},
    {service: 'Car', search: ['geico', 'liberty mutual', 'allstate', 'progressive', 'state farm', 'car payment'], logo: '/images/carLogo.svg'},
    {service: 'Internet Service', search: ['wifi','verizon fios', 'fios', 'xfinity', 'spectrum'], logo: '/images/wifiLogo.svg'},
    {service: 'Phone', search: ['verizon wireless', 'verizon', 'at&t', 't-mobile'], logo: '/images/phoneLogo.svg'},
    {service: 'Home', search: ['rent', 'mortgage'], logo: '/images/houseLogo.svg'},
    {service: 'Credit Card', search: ['chase', 'capital one', 'discover', 'american express', 'citi', 'bank of america', 'wells fargo'], logo: '/images/credit-cardLogo.svg'}

]

async function presets() {

    await connectDB()
    
    await Services.deleteMany({}) 

    await Services.insertMany(subServices)
        console.log('Service has been added')
    
    await mongoose.disconnect()

}

presets()