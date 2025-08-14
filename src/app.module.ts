import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendedoresModule } from './vendedores/vendedores.module';

@Module({
  imports: [VendedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
