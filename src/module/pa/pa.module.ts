import { Module } from '@nestjs/common';
import { PaService } from './services/pa.service';
import { PaController } from './pa.controller';
import { PrismaService } from 'src/module/prisma/service/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [PaController],
  providers: [PaService, PrismaService],
})
export class PaModule {}
