import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PurchaseServiceBase } from "./base/purchase.service.base";

@Injectable()
export class PurchaseService extends PurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
