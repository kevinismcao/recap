import express from 'express';
import {Plan} from '../models/plan.js';

const router = express.Router();

router.post('/', (req, res) =>{
    const newPlan = new Plan({
        start: req.body.start,
        end: req.body.end,
        city: req.body.city,
        itinery: req.body.itinery,
    }
        
    )
})