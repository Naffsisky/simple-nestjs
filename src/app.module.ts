import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { HeroModule } from './hero/hero.module';
import { MiawController } from './miaw/miaw.controller';
import { MiawModule } from './miaw/miaw.module';

@Module({
  imports: [UserModule, HeroModule, MiawModule],
  controllers: [AppController, RoleController, MiawController],
  providers: [AppService],
})
export class AppModule {}
