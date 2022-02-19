import { Module } from "@nestjs/common";
import { BenefitModuleBase } from "./base/benefit.module.base";
import { BenefitService } from "./benefit.service";
import { BenefitController } from "./benefit.controller";
import { BenefitResolver } from "./benefit.resolver";

@Module({
  imports: [BenefitModuleBase],
  controllers: [BenefitController],
  providers: [BenefitService, BenefitResolver],
  exports: [BenefitService],
})
export class BenefitModule {}
