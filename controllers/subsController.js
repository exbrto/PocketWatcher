import Subscriptions from '../models/Subscriptions.js'        // imports the model from the file targeted with the Mdoels folder so that it can be saved to the databse

import Services from '../models/Services.js'        // imports then model created for presets

export async function postSubby(req, res, next) {       // this function runs when the form is submitted (the POST request)
                                                            // next passes errors to express 
    try {

        const {service, price, paymentCycle, paymentDate} = req.body    // pulls each field out and req.body holds the form data
                                                                                                                            
        const searchedFor = service.trim().toLowerCase() // clean the service string .replace(/[^a-z0-9]/g, '')

        const match = await Services.findOne({search: searchedFor})

        const matchOrNoMatch = match ? match.service : service.trim()

        const logo = match ? match.logo : '/images/defaultLogo.svg'

        await Subscriptions.create({     // creates a new wokrout in the database, await means mongoose checks every
                                                       // value first to make sure something that isnt allowd is wasnt entered, then it an erorr will occur and itll jump to catch.
            logo: logo,
            service: matchOrNoMatch,
            price, 
            paymentCycle, 
            paymentDate,
    })
        // res.status(201).json({          // use to test and see fi a workout is savedin the databse
        //    success: true,
        //    msg: 'Medication list has been created',
        //    newWorkouts
        // })
        res.redirect('/subscriptions')       
    
}   catch(error) {   // if the save attempt fails then an error is thrown.
        next(error)
    }
    
}

export async function updateSubby(req, res, next) {

    try {
        const {id} = req.params

        const {price, status} = req.body  // take the new value that was edited and saved

        const updatedMedsList = await Subscriptions.findByIdAndUpdate(
            id,
            {price, status},
            {new: true, runValidators: true}
        )

        res.status(200).json({
            success: true,
            msg: 'Subscriptions list has been updated',
            updatedMedsList
        })
}   catch(error) {
        next(error)
    }

}

export async function deleteSubby(req, res, next) {

    try {
        const {id} = req.params

        const deleteThisShi = await Subscriptions.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            msg: 'Subscription has been deleted',
            deleteThisShi
        })
}   catch(error) {
        next(error)
}

}