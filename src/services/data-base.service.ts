import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  public getAll(collection, options?, appName?) {
    const dbRef = this.getReference(collection, options, undefined, appName);
    return dbRef.get().then( (querySnapshot) => {
      const array: any = [];
      querySnapshot.forEach((doc) => {
        array.push({
          id: doc.id,
          data: doc.data(),
          collection: collection
        });
      });
      return array;
    });
  }

  public getAllPaginator(collection, options?, appName?) {
    const dbRef = this.getReference(collection, options, undefined, appName);
    return dbRef.get().then((querySnapshot) => {
      const array: any = [];
      querySnapshot.forEach((doc) => {
        array.push({
          id: doc.id,
          data: doc.data(),
          collection: collection
        });
      });
      return {list: array, lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1]};
    });
  }

  public getAllSnapshot(collection: string, options?, appName?) {
    const dbRef = this.getReference(collection, options, undefined, appName);
    return dbRef;
  }

  public get(doc, options?, appName?) {
    const dbRef = this.getReference(doc.collection, options, doc.id, appName);
    return dbRef.get().then( (docResponse) => {
      const response: any = {
        id: docResponse.id,
        data: docResponse.data(),
        collection: doc.collection
      };
      return response;
    });
  }

  public set(doc, options?, appName?) {
    const dbRef = this.getReference(doc.collection, options, doc.id, appName);
    return dbRef.set(Object.assign({}, doc.data));
  }

  public add(doc, options?, appName?) {
    const dbRef = this.getReference(doc.collection, options, appName);
    return dbRef.add(Object.assign({}, doc.data)).then((docResponse) => {
      doc.id  = docResponse.id;
      return doc;
    });
  }

  public update(doc, options?, appName?) {
    const dbRef = this.getReference(doc.collection, options, doc.id, appName);
    return dbRef.update(doc.data);
  }

  public getReference(collection, options?, documentId?, appName?) {
    let dbRef: any = firebase.app(appName).firestore();

    if (options !== undefined && options.parent !== undefined) {
      dbRef = dbRef.collection(options.parent.collection)
        .doc(options.parent.id);
    }

    dbRef = dbRef.collection(collection);

    if (documentId) {
      return dbRef.doc(documentId);
    } else {
      if (options !== undefined &&  options.where !== undefined) {
        options.where.forEach( (whereClause) => {
          dbRef = dbRef.where(whereClause.attribute, whereClause.operator, whereClause.value);
        });
      }

      if (options != undefined && options.orderBy != undefined) {
        options.orderBy.forEach( (orderByClause) => {
          dbRef = dbRef.orderBy(orderByClause.fieldPath, orderByClause.orderByClause);
        });
      }

      if (options != undefined && options.startAfter != undefined) {
        dbRef = dbRef.startAfter(options.startAfter);
      }
      if (options != undefined &&  options.limit != undefined) {
        dbRef = dbRef.limit(options.limit);
      }
      return dbRef;
    }
  }
}
