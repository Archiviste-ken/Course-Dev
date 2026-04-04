import ArenaCard from "./ArenaCard.jsx";

function ChatContainer({ arenaHistory }) {
  return (
    <section className="space-y-6 pb-4">
      {arenaHistory.map((entry, index) => (
        <ArenaCard
          key={entry.id}
          entry={entry}
          index={index}
          animationDelay={`${Math.min(index * 75, 360)}ms`}
        />
      ))}
    </section>
  );
}

export default ChatContainer;
