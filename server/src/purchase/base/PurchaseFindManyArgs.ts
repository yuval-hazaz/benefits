/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseWhereInput } from "./PurchaseWhereInput";
import { Type } from "class-transformer";
import { PurchaseOrderByInput } from "./PurchaseOrderByInput";

@ArgsType()
class PurchaseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchaseWhereInput,
  })
  @Field(() => PurchaseWhereInput, { nullable: true })
  @Type(() => PurchaseWhereInput)
  where?: PurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: PurchaseOrderByInput,
  })
  @Field(() => PurchaseOrderByInput, { nullable: true })
  @Type(() => PurchaseOrderByInput)
  orderBy?: PurchaseOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PurchaseFindManyArgs };
