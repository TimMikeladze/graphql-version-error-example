import {
  defaultFieldResolver,
  GraphQLID,
  GraphQLObjectType,
} from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

export class UniqueIdDirective extends SchemaDirectiveVisitor {
  public visitObject(type: GraphQLObjectType) {
    type.getFields().id = {
      name: 'id',
      type: GraphQLID,
      description: 'Unique ID',
      args: [],
      resolve: defaultFieldResolver,
    };
  }
}
