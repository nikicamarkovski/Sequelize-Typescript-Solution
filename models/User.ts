import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
  } from "sequelize-typescript";
  import {Post} from './Post'

@Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "user"
  })
  export class User extends Model<User> {
    @Column({
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    userId!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
      })
      username!: string;
      @Column({
        allowNull: false,
        type: DataType.STRING
      })
      password!: string;

      
  


}