import { Injectable } from '@angular/core';
import { collectionData, collection, doc, docData, Firestore, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Note {
  id?: string;
  title: string;
  text: string;
} 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Note[]>;
  }

  getNoteById(id): Observable<Note[]> {
    const notesDocRef = doc(this.firestore, `notes/${id}`);
    return docData(notesDocRef, { idField: 'id'}) as Observable<Note[]>;
  }


  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }


  deleteNote(note: Note) {
    const notesDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(notesDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }
}





// constructor(private _http:HttpClient) { }
// postRestaurant(data:any){
//   return this._http.post<any>("https://jsonplaceholder.typicode.com/posts",data).pipe(map((res:any)=>{
//     return res;
//   }))
// }
// getRestaurant(){
//   return this._http.get<any>("https://jsonplaceholder.typicode.com/posts").pipe(map((res:any)=>{
//     return res;
//   }))
// }
// updateRestaurant(data:any, id:number){
//   return this._http.put<any>("https://jsonplaceholder.typicode.com/posts/"+id,data).pipe(map((res:any)=>{
//     return res;
//   }))
// }
// deleteRestaurant(id:number){
//   return this._http.delete<any>("https://jsonplaceholder.typicode.com/posts/"+id).pipe(map((res:any)=>{
//     return res;
//   }))
// }
// }
