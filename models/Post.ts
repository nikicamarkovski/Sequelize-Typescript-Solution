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
import { Category } from "./Category";
import { User } from "./User";

@Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "post"
  })
  export class Post extends Model<Post> {
    @Column({
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    postId!: string;
    @Column({
      allowNull: false,
      type: DataType.STRING 
    })
    title!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
      })
      text!: string;

 
    

      @ForeignKey(() => Category)
      categoryId!: string;

      @BelongsTo(() => Category)
      category!: Category;
}