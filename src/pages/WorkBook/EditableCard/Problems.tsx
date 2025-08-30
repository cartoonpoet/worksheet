const Problems = () => {
  return problems.map((problem, idx) => {
    const isSelected = [selectedProblemId, replacedProblemId].includes(
      problem.id
    );
    return (
      <Problem
        isUseSelect
        key={problem.id}
        num={idx + 1}
        title={problem.title}
        isShortAnswer={problem.type === 2}
        problemImageUrl={problem.problemImageUrl}
        answerRate={problem.answerRate}
        level={problem.level}
        isSelected={isSelected}
        buttons={[
          {
            icon: isSelected ? AddCircleFillIcon : AddCircleIcon,
            alt: "AddCircleIcon",
            text: "유사문제",
            onClick: () => handleAddSimilarProblem(problem.id),
            isSelected: isSelected,
          },
          {
            icon: DeleteIcon,
            alt: "DeleteIcon",
            text: "삭제",
            onClick: () => handleDeleteProblem(problem.id),
          },
        ]}
      />
    );
  });
};

export default Problems;
