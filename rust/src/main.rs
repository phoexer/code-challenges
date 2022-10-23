mod two_sum;
mod find_nb;

fn main() {
    println!("Two Sum Problem");
    println!(
        "array=[3,2,1,3], target=4, result={:?}",
        two_sum::two_sum(&[3, 2, 1, 3], 4)
    );
    println!("Find n");
    println!("(4183059834009,   2022),={:?}", find_nb::find_nb(4183059834009));

    println!("Done");
}
