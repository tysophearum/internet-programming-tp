import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserMiddleware } from './user/user.middleware';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ProductModule } from './product/product.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AuthModule,
    CategoryModule,
    ItemModule,
    ProductModule,
    PriceModule
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(UserController)
  }

}
