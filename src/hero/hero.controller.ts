import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateHero } from './dto/create-hero.dto';

const heroes = [
  {
    id: 0,
    name: 'Aurora',
    gambar: 'ice.jpg',
  },
  {
    id: 1,
    name: 'Akai',
    gambar: 'panda.jpg',
  },
  {
    id: 2,
    name: 'Johnson',
    gambar: 'mobil.jpg',
  },
  {
    id: 3,
    name: 'Franco',
    gambar: 'ndut.jpg',
  },
];
@Controller('hero')
export class HeroController {
  @Get('/')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  index(@Res() response) {
    response.json(heroes);
  }

  @Get('create')
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'prinaf');
    return 'Hello Create!';
  }

  @Post('store')
  store(@Req() request, @Body() CreateHeroDto: CreateHero, @Res() response) {
    try {
      // const { id, name, gambar } = request.body;
      // heroes.push({ id, name, gambar });
      // response.status(201).json({
      //   message: 'Created',
      //   content: heroes,
      // });
      heroes.push(CreateHeroDto);
      response.status(201).json({
        message: 'Created',
        content: request.body,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error',
      });
    }
  }

  @Get('detail/:id')
  findOne(@Param('id') id: number) {
    const hero = heroes.filter((hero) => {
      return hero.id == id;
    });

    return hero[0];
  }

  @Get('view')
  @HttpCode(204)
  view(): string {
    return 'Hello Create!';
  }

  @Get('hello')
  @Redirect('https://www.google.com/', 302)
  welcome(): string {
    return 'Hello Welcome!';
  }
}
