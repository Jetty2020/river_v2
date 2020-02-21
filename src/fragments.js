export const USER_FRAGMENT = `
      id
      username
      phone
      authority1
      authority2
      createdAt
      updatedAt
  `;

export const FILE_FRAGMENT = `
    id
    url
    createdAt
    updatedAt
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        finished
        postname
        location
        caption
        date
        createdAt
        updatedAt
        postfiles {
            ${FILE_FRAGMENT}
        }
        user {
           ${USER_FRAGMENT}
        }
    }
      
`;


export const FULL_STORE_FRAGMENT = `
      fragment StoreParts on Store{
          id
          Advertise
          storename
          location
          caption
          open
          close
          createdAt
          updatedAt
          storefiles {
              ${FILE_FRAGMENT}
          }
          user {
             ${USER_FRAGMENT}
         }
     }
      
`;

export const FULL_AVVERTISE_FRAGMENT = `
      fragment AdvertiseParts on Advertise{
          id
          caption
          createdAt
          updatedAt
          advertisefiles {
              ${FILE_FRAGMENT}
          }
     }
      
`;

export const FULL_TICKET_FRAGMENT = `
      fragment TicketParts on Ticket{
          id
          createdAt
          updatedAt
          receiver {
              ${USER_FRAGMENT}
          }
          user {
             ${USER_FRAGMENT}
         }
     }
      
`;

export const FULL_ASSET_FRAGMENT = `
      fragment AssetParts on Asset{
          id
          assets
          date
          createdAt
          updatedAt
          user {
             ${USER_FRAGMENT}
         }
     }
      
`;

export const FULL_POINT_FRAGMENT = `
      fragment PointParts on Point{
          id
          point
          createdAt
          updatedAt
          receiver {
              ${USER_FRAGMENT}
          }
          user {
             ${USER_FRAGMENT}
         }
     }
      
`;

export const FULL_RANK_FRAGMENT = `
      fragment RankParts on Point{
          id
          point
          createdAt
          updatedAt
          receiver {
              ${USER_FRAGMENT}
          }
          user {
             ${USER_FRAGMENT}
         }
     }
      
`;