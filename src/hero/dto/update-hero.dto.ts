import { PartialType } from '@nestjs/mapped-types';
import { CreateHero } from './create-hero.dto';

export class UpdateHero extends PartialType(CreateHero) {}
