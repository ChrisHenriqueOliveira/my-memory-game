interface TextMapProps {
  id: number;
  text: string;
  difficulty: string;
}

export const textMaps: TextMapProps[] = [
  {
    id: 1,
    text:
      'Nulla maximus neque felis, id accumsan nibh sagittis quis. Nunc maximus nisl in sagittis scelerisque.',
    difficulty: 'Easy',
  },
  {
    id: 2,
    text:
      'Nullam convallis maximus velit. Morbi euismod, enim id facilisis aliquet, erat enim sagittis lectus, at dictum arcu tortor a nisl.',
    difficulty: 'Easy',
  },
  {
    id: 3,
    text:
      'Donec semper nisl in porta commodo. Ut sed augue sit amet nibh dapibus porta at eu mauris.',
    difficulty: 'Easy',
  },
  {
    id: 1,
    text:
      'Sque convallis et augue a vestibulum. Pellentesque eget diam neque. Curabitur ac hendrerit urna. Cras at lectus quis ante vehicula blandit at porttitor erat. Sed hendrerit nibh tellus.',
    difficulty: 'Medium',
  },
  {
    id: 2,
    text:
      'Quisque sodales, risus in vehicula blandit, turpis dui elementum nunc, et tempus tellus erat at velit. Nunc a arcu rutrum, euismod nisl eget, venenatis enim. Fusce magna mi, convallis a tristique suscipit, maximus vel erat.',
    difficulty: 'Medium',
  },
  {
    id: 3,
    text:
      'Donec nec neque eu lacus varius luctus. Nulla efficitur blandit justo, ut aliquet ante facilisis non. Aenean arcu orci, dapibus vitae suscipit id, viverra sodales dui.',
    difficulty: 'Medium',
  },
  {
    id: 1,
    text:
      'Aliquam vehicula nibh ut leo convallis sollicitudin. Suspendisse mollis aliquam tortor, quis porta enim rutrum sit amet. Integer sodales varius congue. Suspendisse lacinia vitae mauris pretium hendrerit. Suspendisse non tristique est. Proin vestibulum sollicitudin purus vitae pellentesque.',
    difficulty: 'Hard',
  },
  {
    id: 2,
    text:
      'Aliquam erat volutpat. Donec feugiat nec mauris vitae consequat. Sed scelerisque fermentum justo, eget aliquet dolor pulvinar ac. Cras molestie finibus cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sagittis porta ex at accumsan. ',
    difficulty: 'Hard',
  },
  {
    id: 3,
    text:
      'Mauris volutpat rhoncus orci non eleifend. Sed sed semper diam, id facilisis dolor. Donec vitae enim nulla. Nunc at orci ut justo maximus tempor id nec nisl. Donec congue eros eget mauris tempus, et ultrices quam bibendum. Nullam eget auctor mi, ut sagittis est.',
    difficulty: 'Hard',
  },
];
