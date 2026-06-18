import {create} from 'zustand';

type ProgressStore = {
    progressByTopic: Record<string, string[]>;

    completeQuestion: (
        topicId: string,
        questionId: string,
    ) => void;
};

export const useProgressStore =
    create<ProgressStore>(set => ({
        progressByTopic: {},

        completeQuestion: (
            topicId,
            questionId,
        ) =>
            set(state => ({
                progressByTopic: {
                    ...state.progressByTopic,

                    [topicId]: [
                        ...(state.progressByTopic[
                            topicId
                        ] ?? []),
                        questionId,
                    ],
                },
            })),
    }));