mod two_sum;

fn main() {
    println!("Two Sum Problem");
    println!(
        "array=[3,2,1,3], target=4, result={:?}",
        two_sum::two_sum(&[3, 2, 1, 3], 4)
    );

    println!("Done");
}
