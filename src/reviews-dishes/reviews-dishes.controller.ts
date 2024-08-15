import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsDishesService } from './reviews-dishes.service';
import { CreateReviewsDishDto } from './dto/create-reviews-dish.dto';
import { UpdateReviewsDishDto } from './dto/update-reviews-dish.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reviews-dishes')
@Controller('reviews-dishes')
export class ReviewsDishesController {
  constructor(private readonly reviewsDishesService: ReviewsDishesService) {}

  @Post()
  create(@Body() createReviewsDishDto: CreateReviewsDishDto) {
    return this.reviewsDishesService.create(createReviewsDishDto);
  }

  @Get()
  findAll() {
    return this.reviewsDishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsDishesService.findOne(id);
  }

  @Get(':id/average-rating')
  getAverageRating(@Param('id') dishId: string) {
    return this.reviewsDishesService.getAverageRating(dishId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewsDishDto: UpdateReviewsDishDto,
  ) {
    return this.reviewsDishesService.update(id, updateReviewsDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsDishesService.remove(id);
  }
}
