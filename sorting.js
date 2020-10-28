function sortNet10(data) {    // ten-input sorting network by Waksman, 1969
    var swap;
    if (data[0] > data[5]) { swap = data[0]; data[0] = data[5]; data[5] = swap; }
    if (data[1] > data[6]) { swap = data[1]; data[1] = data[6]; data[6] = swap; }
    if (data[2] > data[7]) { swap = data[2]; data[2] = data[7]; data[7] = swap; }
    if (data[3] > data[8]) { swap = data[3]; data[3] = data[8]; data[8] = swap; }
    if (data[4] > data[9]) { swap = data[4]; data[4] = data[9]; data[9] = swap; }
    if (data[0] > data[3]) { swap = data[0]; data[0] = data[3]; data[3] = swap; }
    if (data[5] > data[8]) { swap = data[5]; data[5] = data[8]; data[8] = swap; }
    if (data[1] > data[4]) { swap = data[1]; data[1] = data[4]; data[4] = swap; }
    if (data[6] > data[9]) { swap = data[6]; data[6] = data[9]; data[9] = swap; }
    if (data[0] > data[2]) { swap = data[0]; data[0] = data[2]; data[2] = swap; }
    if (data[3] > data[6]) { swap = data[3]; data[3] = data[6]; data[6] = swap; }
    if (data[7] > data[9]) { swap = data[7]; data[7] = data[9]; data[9] = swap; }
    if (data[0] > data[1]) { swap = data[0]; data[0] = data[1]; data[1] = swap; }
    if (data[2] > data[4]) { swap = data[2]; data[2] = data[4]; data[4] = swap; }
    if (data[5] > data[7]) { swap = data[5]; data[5] = data[7]; data[7] = swap; }
    if (data[8] > data[9]) { swap = data[8]; data[8] = data[9]; data[9] = swap; }
    if (data[1] > data[2]) { swap = data[1]; data[1] = data[2]; data[2] = swap; }
    if (data[3] > data[5]) { swap = data[3]; data[3] = data[5]; data[5] = swap; }
    if (data[4] > data[6]) { swap = data[4]; data[4] = data[6]; data[6] = swap; }
    if (data[7] > data[8]) { swap = data[7]; data[7] = data[8]; data[8] = swap; }
    if (data[1] > data[3]) { swap = data[1]; data[1] = data[3]; data[3] = swap; }
    if (data[4] > data[7]) { swap = data[4]; data[4] = data[7]; data[7] = swap; }
    if (data[2] > data[5]) { swap = data[2]; data[2] = data[5]; data[5] = swap; }
    if (data[6] > data[8]) { swap = data[6]; data[6] = data[8]; data[8] = swap; }
    if (data[2] > data[3]) { swap = data[2]; data[2] = data[3]; data[3] = swap; }
    if (data[4] > data[5]) { swap = data[4]; data[4] = data[5]; data[5] = swap; }
    if (data[6] > data[7]) { swap = data[6]; data[6] = data[7]; data[7] = swap; }
    if (data[3] > data[4]) { swap = data[3]; data[3] = data[4]; data[4] = swap; }
    if (data[5] > data[6]) { swap = data[5]; data[5] = data[6]; data[6] = swap; }
    return(data);
}

alert(sortNet10([5,7,1,8,4,3,6,9,2,0]));

alert(sortNet10([6,7,1,8,4,5,3,9,2,0]));

alert(sortNet10([5,7,6,9,2,0,1,8,4,3]));
