// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingHelper = () => {
  return `
  SELECT id, user1_id, user2_id, activevoting FROM MATCH
  WHERE NOT user1_id=$1
  AND NOT user2_id=$1
  AND id NOT IN ((SELECT matchid FROM outcomes WHERE userid=$1))
  AND activevoting=1
  ORDER BY RANDOM()
  LIMIT 20;
  `;
};

// approve or disapprove a match
export const updateMatchmakingHelper = decision => {
  if (decision === 'approved') {
    return `
    UPDATE MATCH 
    SET approvedcount = approvedcount + $2
    WHERE id=$1
    RETURNING *;
    `;
  }
  if (decision === 'rejected') {
    return `
    UPDATE MATCH 
    SET rejectedcount = rejectedcount + $2
    WHERE id=$1
    RETURNING *;
    `;
  }
};

export const inactivateMatchMakingHelper = () => {
  return `
  UPDATE MATCH
  SET activevoting = 0
  WHERE id=$1
  RETURNING *;
  `;
};

export const fetchSingleUsersTagsForMatchmakingHelper = id => {
  return `
    SELECT tag
    FROM TAGS
    INNER JOIN USERS_TAGS on TAGS.id=USERS_TAGS.tagid
    INNER JOIN USERS on USERS_TAGS.userid=USERS.id
    WHERE users.id=${id}
    and type='0'
  `;
};
