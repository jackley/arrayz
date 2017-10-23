import Collection from '../Collection';

class _States {

  constructor() {
    // Get our default Data
    this.data = this.defaults();

    // New up a collection
    const collection = new Collection;

    // Add shared collection stuff
    Object.assign(this.data.__proto__, collection);

    // Assign any custom collection methods, or override collections
    // this.data.other = this.other; ? How does this even work
    this.data.__proto__.withArmedForces = this._withArmedForces;

    // return the raw array
    return this.data;
  }

  _withArmedForces() {
    this.data.push(
      {
        code: 'AE',
        name: 'ARMED FORCES AFRICA \ CANADA \ EUROPE \ MIDDLE EAST',
      });
    this.data.push(
      {
        code: 'AA',
        name: 'ARMED FORCES AMERICA (EXCEPT CANADA)',
      });
    this.data.push(
      {
        code: 'AP',
        name: 'ARMED FORCES PACIFIC'
      });
    return this.data;
  }

  defaults() {
    return [
      {
        code: 'AL',
        name: 'ALABAMA',
      },
      {
        code: 'AK',
        name: 'ALASKA',
      },
      {
        code: 'AS',
        name: 'AMERICAN SAMOA',
      },
      {
        code: 'AZ',
        name: 'ARIZONA',
      },
      {
        code: 'AR',
        name: 'ARKANSAS',
      },
      {
        code: 'CA',
        name: 'CALIFORNIA',
      },
      {
        code: 'CO',
        name: 'COLORADO',
      },
      {
        code: 'CT',
        name: 'CONNECTICUT',
      },
      {
        code: 'DE',
        name: 'DELAWARE',
      },
      {
        code: 'DC',
        name: 'DISTRICT OF COLUMBIA',
      },
      {
        code: 'FM',
        name: 'FEDERATED STATES OF MICRONESIA',
      },
      {
        code: 'FL',
        name: 'FLORIDA',
      },
      {
        code: 'GA',
        name: 'GEORGIA',
      },
      {
        code: 'GU',
        name: 'GUAM GU',
      },
      {
        code: 'HI',
        name: 'HAWAII',
      },
      {
        code: 'ID',
        name: 'IDAHO',
      },
      {
        code: 'IL',
        name: 'ILLINOIS',
      },
      {
        code: 'IN',
        name: 'INDIANA',
      },
      {
        code: 'IA',
        name: 'IOWA',
      },
      {
        code: 'KS',
        name: 'KANSAS',
      },
      {
        code: 'KY',
        name: 'KENTUCKY',
      },
      {
        code: 'LA',
        name: 'LOUISIANA',
      },
      {
        code: 'ME',
        name: 'MAINE',
      },
      {
        code: 'MH',
        name: 'MARSHALL ISLANDS',
      },
      {
        code: 'MD',
        name: 'MARYLAND',
      },
      {
        code: 'MA',
        name: 'MASSACHUSETTS',
      },
      {
        code: 'MI',
        name: 'MICHIGAN',
      },
      {
        code: 'MN',
        name: 'MINNESOTA',
      },
      {
        code: 'MS',
        name: 'MISSISSIPPI',
      },
      {
        code: 'MO',
        name: 'MISSOURI',
      },
      {
        code: 'MT',
        name: 'MONTANA',
      },
      {
        code: 'NE',
        name: 'NEBRASKA',
      },
      {
        code: 'NV',
        name: 'NEVADA',
      },
      {
        code: 'NH',
        name: 'NEW HAMPSHIRE',
      },
      {
        code: 'NJ',
        name: 'NEW JERSEY',
      },
      {
        code: 'NM',
        name: 'NEW MEXICO',
      },
      {
        code: 'NY',
        name: 'NEW YORK',
      },
      {
        code: 'NC',
        name: 'NORTH CAROLINA',
      },
      {
        code: 'ND',
        name: 'NORTH DAKOTA',
      },
      {
        code: 'MP',
        name: 'NORTHERN MARIANA ISLANDS',
      },
      {
        code: 'OH',
        name: 'OHIO',
      },
      {
        code: 'OK',
        name: 'OKLAHOMA',
      },
      {
        code: 'OR',
        name: 'OREGON',
      },
      {
        code: 'PW',
        name: 'PALAU',
      },
      {
        code: 'PA',
        name: 'PENNSYLVANIA',
      },
      {
        code: 'PR',
        name: 'PUERTO RICO',
      },
      {
        code: 'RI',
        name: 'RHODE ISLAND',
      },
      {
        code: 'SC',
        name: 'SOUTH CAROLINA',
      },
      {
        code: 'SD',
        name: 'SOUTH DAKOTA',
      },
      {
        code: 'TN',
        name: 'TENNESSEE',
      },
      {
        code: 'TX',
        name: 'TEXAS',
      },
      {
        code: 'UT',
        name: 'UTAH',
      },
      {
        code: 'VT',
        name: 'VERMONT',
      },
      {
        code: 'VI',
        name: 'VIRGIN ISLANDS',
      },
      {
        code: 'VA',
        name: 'VIRGINIA',
      },
      {
        code: 'WA',
        name: 'WASHINGTON',
      },
      {
        code: 'WV',
        name: 'WEST VIRGINIA',
      },
      {
        code: 'WI',
        name: 'WISCONSIN',
      },
      {
        code: 'WY',
        name: 'WYOMING',
      },

    ];
  }
}

let States = new _States;

export default States;
