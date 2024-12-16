import mongoose, { model, Schema } from "mongoose";

export const settingsSchema = new Schema({
    total:{
        type:Number,
        default:0
    },
    accommondation:{
        type:Number,
        default:0
    },
    activities:{
        type:Number,
        default:0
    },
    shopping:{
        type:Number,
        default:0
    },
    food:{
        type:Number,
        default:0
    },
    baltam:{
        default:0
    }
})



export const settingsModel = model('settings',settingsSchema)