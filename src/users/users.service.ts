import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  async create(createUserDto: CreateUserDto):Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find();
  }
  
  async findOne(email: string):Promise<User | undefined> {
    return this.userModel.findOne({email});
  }



  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id},{$set:{...updateUserDto}});
  }

  async remove(email: string) {
    return this.userModel.deleteOne({email});
  }
}
