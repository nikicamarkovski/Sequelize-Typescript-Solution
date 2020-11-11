import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
  } from "sequelize-typescript";
import {Post} from './Post'
@Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "category"
  })
  export class Category extends Model<Category> {
    @Column({
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    categoryId!: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
      })
      name!: string;

      @HasMany(()=> Post)
      post!:Post
}
