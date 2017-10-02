// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { GroupProducts } from './links.js';
import { Agents } from './links.js';
import { Branchs } from './links.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  'members.insert'(membersId, membersCode, membersName,membersTel, membersAddress, membersBranchId, membersType) {
    // check(code, String);
    // check(name, String);
    // check(type, String);

    return Members.insert({
      name,
      type,
      createdAt: new Date(),
    });
  },
  'products.insert'(productsId, productGroupId, productsCode, productsName, productsDetail, productsLastUpdate, productsQuantity, productsPackBarcode, productsTotalPerPack, productsExpireDate, productsReturn, productsSeleCondition, productsPrice, productsWholesaleCost,productsAgentPrice,productsPricePerPack, productsQuantityOfPack, productsPriceBuy,productsTag, productsPicture, productsWeight, productsCost, productsType) {
    // check(name, String);
    // check(type, String);

    return Products.insert({
      createdAt: new Date(),
    });
  },
  'groupProducts.insert'(groupProductsId, groupProductsCode, groupProductsName, groupProductsDetail, groupProductsLastUpdate) {
    // check(url, String);
    // check(title, String);

    return GroupProducts.insert({
      createdAt: new Date(),
    });
  },
  'agents.insert'(agentsId, agentsName, agentsTel, agentsAddress) {
    // check(url, String);
    // check(title, String);

    return Agents.insert({
      createdAt: new Date(),
    });
  },
  'branchs.insert'(branchsId, branchsName, branchsTel, branchsAdderess) {
    // check(url, String);
    // check(title, String);

    return Branchs.insert({
      createdAt: new Date(),
    });
  },
});
