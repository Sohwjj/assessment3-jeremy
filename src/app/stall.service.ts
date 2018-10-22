import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from '../environments/environment';



@Injectable()
export class StallService {

    constructor(private http: HttpClient) { }

    createStall(stallData): Promise<any> {
        let formData = new HttpParams()
            .set('stall-name', stallData.stallName)
            .set('stall-location', stallData.stallLocation)
            .set('stall-description', stallData.stallDescription)
        let i = 0;
        for (let f of stallData.foods) {
            formData = formData.set(`food-name${i}`,f.foodname)
                .set(`calories${i}`, f.calories)
                .set(`food-type${i}`, f.foodtype)
                .set(`food-description${i}`, f.fooddescription)
            i++
        }
        console.log('>>> params = ', formData.toString())
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        return (
            this.http.post(`${environment.api_url}/add`, formData.toString(),
                    { headers: headers })
                .toPromise()
        );
    }



}