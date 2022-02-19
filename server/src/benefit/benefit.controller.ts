import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BenefitService } from "./benefit.service";
import { BenefitControllerBase } from "./base/benefit.controller.base";

@swagger.ApiTags("benefits")
@common.Controller("benefits")
export class BenefitController extends BenefitControllerBase {
  constructor(
    protected readonly service: BenefitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
