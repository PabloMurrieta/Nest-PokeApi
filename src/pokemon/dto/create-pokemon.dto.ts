import { MinLength } from "@nestjs/class-validator";
import { IsInt, IsPositive, Min, IsString, } from "class-validator";

export class CreatePokemonDto {

    // @IsInt(), @IsPositive(), @Min(1)
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // @IsString(), @MinLength(1)
    @IsString()
    @MinLength(1)
    name: string;
}