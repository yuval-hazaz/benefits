import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BenefitServiceBase } from "./base/benefit.service.base";

@Injectable()
export class BenefitService extends BenefitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
