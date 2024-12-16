import { model, Schema } from "mongoose";

export const daySchema = new Schema({
    dete:{
        type:Date,
        default:Date.now,
        unique:true
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



export const dayModel = model('day',daySchema)