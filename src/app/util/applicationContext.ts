import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export enum ContextDataItem {
  FILTER_SITE = 'filterSite',
  FILTER_CATEGORY = 'filterCategory',
  FILTER_BRAND = 'filterBrand',
  FILTER_STORE = 'filterStore',
  FILTER_ACCOUNT = 'filterAccount'
}

export enum ContextEvents {
    CONTEXT_INIT = 1,
    VALUDE_CHANGED = 2,
    CONTEXT_DESTROYED = 3
}

export interface ContextActionListencer {
    event: ContextEvents;
    data: any;
}

/**
 * ApplicationContext is an Injectable service, at Root level.
 * This is used to store globally used data.
 * Also supports subscription service, to listen for any changes in them
 *
 * To use, one must be define this, as a dependency in the host constructor
 *
 * Keys:
 * #### loggedIn: boolean
 * #### sessionId: number
 * #### searchText: string
 * #### searchCategory: string
 */

@Injectable({ providedIn: 'root' })
export class ApplicationContext {
    private static data: any = { loggedIn: false };

    public listener: Subject<ContextActionListencer> = new Subject<ContextActionListencer>();

    private static getWindowSession(): any {
        const cookies = document.cookie;
        let x = null;
      //  console.log('cookies = ', cookies);

        if (cookies.indexOf(';')) {
            const cookieList = cookies.split(';');
            x = cookieList[cookieList.length - 1];
        } else {
            x = cookies;
        }
      //  console.log('Selected cookie Obj = ', x);

        if (!x) {
            return { loggedIn: false };
        }

        try {
            return JSON.parse(x);
        } catch (e) {
            console.log(e);
            document.cookie = null;
            return { loggedIn: false };
        }
    }

    private static persistSession() {
        if (!ApplicationContext.data) {
            return;
        }
        // window.sessionStorage.setItem(this.browserSessionVariable, JSON.stringify(ApplicationContext.data));
        const oldCookieData = this.getWindowSession();
        const newCookie = { ...oldCookieData, ...ApplicationContext.data };
        document.cookie = JSON.stringify(newCookie);
        ApplicationContext.data = { ...newCookie };
    }

    public static initApplicatioContext(applicationContext?: { key?: any, value?: any }) {
        if (!applicationContext) {
            // ApplicationContext.data = new Map();
            ApplicationContext.data = (ApplicationContext.getWindowSession());
        } else {
            ApplicationContext.data = applicationContext;
        }
        ApplicationContext.persistSession();
    }

    public getData(key: ContextDataItem) {
        if (!key) {
            return null;
        }

        if (!ApplicationContext.data) {
            ApplicationContext.data = { ...ApplicationContext.getWindowSession() };
        }
        return ApplicationContext.data[key] || null;
    }

    public setData(key: ContextDataItem, value) {
        if (!key) {
            return null;
        }

        if (!ApplicationContext.data) {
            ApplicationContext.data = { ...ApplicationContext.getWindowSession() };
        }

        ApplicationContext.data[key] = value;
        this.notify(ContextEvents.VALUDE_CHANGED, key, value);

        ApplicationContext.persistSession();
    }

    /**
     * Utility method to send updates to listeners
     * @param event ContextEvents
     * @param dataKey any
     * @param dataValue any
     */
    private notify(event: ContextEvents, dataKey?: any, dataValue?: any) {
        if (!this.listener || !event) {
            return;
        }

        this.listener.next({
            event: event,
            data: !dataKey && !dataValue ? ApplicationContext.data : { key: dataKey, value: dataValue }
        });
        return;
    }

    public destroySession() {
        // window.sessionStorage.removeItem(this.getData(th));
        document.cookie = null;
        this.notify(ContextEvents.CONTEXT_DESTROYED);
    }

    public clearFilters( contextDataItems: ContextDataItem[] ) {
      contextDataItems.forEach(filterItem => {
        switch(filterItem) {
          case ContextDataItem.FILTER_BRAND:
          case ContextDataItem.FILTER_CATEGORY:
            case ContextDataItem.FILTER_SITE:
              case ContextDataItem.FILTER_STORE:
            this.setData(filterItem, null);
        }
      });
    }

}
