import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PurchaseResolverBase } from "./base/purchase.resolver.base";
import { Purchase } from "./base/Purchase";
import { PurchaseService } from "./purchase.service";

@graphql.Resolver(() => Purchase)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PurchaseResolver extends PurchaseResolverBase {
  constructor(
    protected readonly service: PurchaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
