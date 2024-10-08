export const checkCollision = (box1, box2) => {
    if (
        box1.x1 < box2.x2 &&
        box1.x2 > box2.x1 &&
        box1.y1 < box2.y2 &&
        box1.y2 > box2.y1
    ) {
        return true; // Có đè lên nhau
    }

    // Kiểm tra xem box2 có đè lên box1 không
    if (
        box2.x1 < box1.x2 &&
        box2.x2 > box1.x1 &&
        box2.y1 < box1.y2 &&
        box2.y2 > box1.y1
    ) {
        return true; // Có đè lên nhau
    }

    // Nếu không thì không đè lên nhau
    return false;
};

const clone2 = () => {
    const left1 = box1.x1;
    const right1 = box1.x2;
    const top1 = box1.y1;
    const bottom1 = box1.y2;

    const left2 = box2.x1;
    const right2 = box2.x2;
    const top2 = box2.y1;
    const bottom2 = box2.y2;

    // Kiểm tra xem có va chạm không
    const isColliding = !(
        bottom1 < top2 ||
        top1 > bottom2 ||
        right1 < left2 ||
        left1 > right2
    );

    console.log("box1", box1);
    console.log("box2", box2);
    console.log("Is colliding:", isColliding);

    return isColliding;
};

const clone = () => {
    const left1 = box1.x1;
    const right1 = box1.x2;
    const top1 = box1.y1;
    const bottom1 = box1.y2;

    const left2 = box2.x1;
    const right2 = box2.x2;
    const top2 = box2.y1;
    const bottom2 = box2.y2;

    console.log(box1.x2 > box2.x1, box1.x2, box2.x1, "x2, x1");
    console.log(box1.x1 < box2.x2, box1.x1, box2.x2, "x1, x2");
    console.log(box1.y1 < box2.y2, box1.y1, box2.y2, "y1, y2");
    console.log(box1.y2 > box2.y1, box1.y2, box2.y1, "y2, y1");
    console.log("box1", box1);
    console.log("box2", box2);
    if (
        box1.x2 > box2.x1 ||
        box1.x1 < box2.x2 ||
        box1.y1 < box2.y2 ||
        box1.y2 > box2.y1
        /// inside
    ) {
        console.log(box1.x2 > box2.x1, "x2, x1");
        console.log(box1.x1 < box2.x2, "x1, x2");
        console.log(box1.y1 < box2.y2, "y1, y2");
        console.log(box1.y2 > box2.y1, "y2, y1");

        console.log("box1 check", box1);
        console.log("box2 check", box2);
        return true;
    }
    if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
        return false;
    } else {
        console.log("box1", box1);
        console.log("box2", box2);
        return true;
    }
};
