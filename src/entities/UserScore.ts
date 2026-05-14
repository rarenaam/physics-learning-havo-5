import { createEntity } from '@/lib/entity-service';

export interface UserScore {
  id: string;
  userId: string;
  totalScore: number;
  questionsAnswered: number;
  createdAt: number;
  updatedAt: number;
}

const UserScoreEntity = createEntity<UserScore>('user_scores');

export const UserScoreService = {
  list: () => UserScoreEntity.list(),
  
  findByUserId: async (userId: string) => {
    const scores = await UserScoreEntity.filter({ userId });
    return scores[0] || null;
  },
  
  updateScore: async (userId: string, pointsToAdd: number) => {
    try {
      const existing = await UserScoreService.findByUserId(userId);
      if (existing) {
        return UserScoreEntity.update(existing.id, {
          totalScore: existing.totalScore + pointsToAdd,
          questionsAnswered: existing.questionsAnswered + 1
        });
      } else {
        return UserScoreEntity.create({
          userId,
          totalScore: pointsToAdd > 0 ? pointsToAdd : 0,
          questionsAnswered: 1
        });
      }
    } catch (e) {
      console.error("Failed to update score", e);
    }
  }
};
