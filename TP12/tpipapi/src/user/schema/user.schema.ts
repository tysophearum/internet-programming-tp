import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop({
        unique: [true, "This username is already taken"]
    })
    username: string

    @Prop({
        unique: [true, "This email is already exist"]
    })
    email: string

    @Prop()
    password: string

    @Prop()
    firstname: string

    @Prop()
    lastname: string
}

export const UserSchema = SchemaFactory.createForClass(User)