import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { dataSourceOption } from './database/data-source';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
config();

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOption), UserModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
