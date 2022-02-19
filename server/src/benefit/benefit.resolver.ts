import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BenefitResolverBase } from "./base/benefit.resolver.base";
import { Benefit } from "./base/Benefit";
import { BenefitService } from "./benefit.service";

@graphql.Resolver(() => Benefit)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BenefitResolver extends BenefitResolverBase {
  constructor(
    protected readonly service: BenefitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
