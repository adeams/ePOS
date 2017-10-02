// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Members } from '../../api/links/links.js';
import { Products } from '../../api/links/links.js';
import { GroupProducts } from '../../api/links/links.js';
import { Agents } from '../../api/links/links.js';
import { Branchs } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Members.find().count() === 0) {
    const data = [
      {
        membersId:1,
        membersCode:'00001',
        membersName:'lookmun adeam',
        membersTel:'0841135943',
        membersAddress:'nongjok',
        membersBranchId:'000001',
        membersType:'admin',
        createdAt: new Date(),
      },
    ];

    data.forEach(Member => Members.insert(Member));
  }

  if (Products.find().count() === 0) {
    const data = [
      {
        productsId:1,
        productGroupId:1,
        productsCode:0000001,
        productsName:'test1',
        productsDetail:'ทดสอบ',
        productsLastUpdate: new Date(),
        productsQuantity:24,
        productsPackBarcode:0000011,
        productsTotalPerPack:12,
        productsExpireDate:'',
        productsReturn:'',
        productsSeleCondition:'sele',
        productsPrice:20,
        productsWholesaleCost:18,
        productsAgentPrice:15,
        productsPricePerPack:300,
        productsQuantityOfPack:2,
        productsPriceBuy:13,
        productsTag:'',
        productsPicture:'',
        productsWeight:1000,
        productsCost:12.5,
        productsType:'ของร้าน',
        createdAt:  new Date(),
      },
    ];

    data.forEach(Product => Products.insert(Product));
  }

  if (GroupProducts.find().count() === 0) {
    const data = [
      {
        groupProductsId:1,
        groupProductsCode:'000001', 
        groupProductsName:'ผลไม้', 
        groupProductsDetail:'ผลไม้ชนิดต่าง', 
        groupProductsLastUpdate: new Date(),
        createdAt: new Date(),
      },
    ];

    data.forEach(GroupProduct => GroupProducts.insert(GroupProduct));
  }

  if (Agents.find().count() === 0) {
    const data = [
      {
        agentsId:1, 
        agentsName:'ลุกมัน อะแดม', 
        agentsTel:'0841135943', 
        agentsAddress:'หนองจอก',
        createdAt: new Date(),
      },
    ];

    data.forEach(Agent => Agents.insert(Agent));
  }

  if (Branchs.find().count() === 0) {
    const data = [
      {
        branchsId:1, 
        branchsName:'สาขาหนองจอก', 
        branchsTel:'0972472310', 
        branchsAdderess:'เคหะหนองจอก',
        createdAt: new Date(),
      },
    ];

    data.forEach(Branch => Branchs.insert(Branch));
  }

});
