pub fn two_sum(numbers: &[i32], target: i32) -> (usize, usize) {
    let mut index = 0;

    loop {
        let counter_part = target - numbers[index];
        let found = numbers.iter().position(|&x| x == counter_part);
        match found {
            Some(value) => {
                if index != value {
                    return (index, value);
                }
            }
            None => (),
        }
        index += 1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_two_sum() {
        assert_eq!(two_sum(&[1, 2, 3], 4), (0, 2));
        assert_eq!(two_sum(&[1234, 5678, 9012], 14690), (1, 2));
        assert_eq!(two_sum(&[2, 2, 3], 4), (1, 0));
    }
}
