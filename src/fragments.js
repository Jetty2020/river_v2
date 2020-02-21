export const USER_FRAGMENT = `
      id
      username
      phone
      authority1
  `;

export const FILE_FRAGMENT = `
    id
    url
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        finished
        postname
        location
        caption
        date
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
          storefiles {
              ${FILE_FRAGMENT}
          }
          user {
             ${USER_FRAGMENT}
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