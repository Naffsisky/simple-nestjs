import { Module } from '@nestjs/common';
import { MiawService } from './miaw.service';

@Module({
  providers: [MiawService],
})
export class MiawModule {}
