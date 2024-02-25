import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateHero } from './dto/create-hero.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateHero } from './dto/update-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get('/')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  index(@Res() response) {
    response.json(this.heroService.findAll());
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
      this.heroService.create(CreateHeroDto);
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
    const hero = this.heroService.findAll().filter((hero) => {
      return hero.id == id;
    });

    return hero;
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() UpdateHero: UpdateHero) {
    this.heroService.findAll().filter((updateHero) => {
      if (updateHero.id == id) {
        updateHero.name = UpdateHero.name;
        updateHero.gambar = UpdateHero.gambar;
      }
    });

    return this.heroService.findAll();
  }

  @Delete('delete/:id')
  destroy(@Param('id') id: number) {
    const hero = this.heroService.findAll().filter((hero) => {
      return hero.id != id;
    });

    return hero;
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
