import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

export enum ProjectStatusDto {
  DESIGN = 'DESIGN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

const trim = ({ value }: { value: unknown }): unknown =>
  typeof value === 'string' ? value.trim() : value;

export class ProjectImageDto {
  @Transform(trim)
  @IsUrl({ require_protocol: true })
  @Length(8, 2048)
  url!: string;

  @Transform(trim)
  @IsString()
  @Length(2, 240)
  alt!: string;

  @IsInt()
  @Min(0)
  @Max(1000)
  sortOrder!: number;
}

export class UpsertProjectDto {
  @Transform(trim)
  @IsString()
  @Length(3, 160)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  slug!: string;

  @Transform(trim)
  @IsString()
  @Length(3, 180)
  title!: string;

  @Transform(trim)
  @IsString()
  @Length(20, 4000)
  description!: string;

  @IsEnum(ProjectStatusDto)
  status!: ProjectStatusDto;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @Length(2, 180)
  location?: string;

  @IsOptional()
  @IsDateString()
  deliveryAt?: string;

  @IsBoolean()
  isPublished!: boolean;

  @IsArray()
  @ArrayMaxSize(24)
  @ValidateNested({ each: true })
  @Type(() => ProjectImageDto)
  gallery!: ProjectImageDto[];
}
